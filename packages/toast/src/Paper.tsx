import type { DOMAttributes } from "react";
import type { Toast } from "./types";
import React from "react";
import { reaction } from "mobx";
import { useTransitionEnd } from "@phragon-react/use-transition-end";
import { useToastManager, useToast } from "./context";

interface Draggable {
	start: number;
	x: number;
	delta: number;
	removalDistance: number;
	canDrag: boolean;
	boundingRect: DOMRect | null;
	didMove: boolean;
}

type DragEvent = MouseEvent & TouchEvent;

function getX(e: DragEvent) {
	return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX;
}

export function usePaper() {
	const ctx = useToast();
	const { toast, onClose, onExit } = ctx;
	const { id } = toast;

	const [isDrag, setIsDrag] = React.useState(false);
	const [, setHash] = React.useState(toast.hash);

	React.useEffect(() => reaction(() => toast.hash, setHash), [toast]);

	const { ref } = useTransitionEnd<HTMLDivElement>({
		isOpen: toast.open,
		onExit,
	});

	const memo = React.useMemo(() => {
		let closeId = 0;
		let { toast, onExit, onClose } = ctx;
		let isFocusLoss = false;
		let isRunning = false;

		const drag: Draggable = {
			start: 0,
			delta: 0,
			x: 0,
			removalDistance: 0,
			canDrag: false,
			boundingRect: null,
			didMove: false,
		};

		function onAutoStart() {
			const { autoClose } = toast;
			if (!closeId && isRunning && autoClose) {
				closeId = window.setTimeout(onClose, autoClose);
			}
		}

		function onAutoStop() {
			if (closeId) {
				window.clearTimeout(closeId);
				closeId = 0;
			}
		}

		function onDragStart(e: React.MouseEvent<HTMLElement, MouseEvent> | React.TouchEvent<HTMLElement>) {
			const elm = ref.current;
			if (!elm || !toast.draggable || !toast.open) {
				return;
			}

			bindDragEvents();
			setIsDrag(true);

			drag.canDrag = true;
			drag.boundingRect = elm.getBoundingClientRect();
			drag.x = drag.start = getX(e.nativeEvent as DragEvent);
			drag.removalDistance = elm.offsetWidth * ((toast.draggablePercent || 0) / 100);
		}

		function onDragTransitionEnd() {
			if (drag.boundingRect) {
				const { left, right } = drag.boundingRect;
				if (toast.pauseOnHover && drag.x >= left && drag.x <= right) {
					pauseToast();
				} else {
					playToast();
				}
			}
		}

		function playToast() {
			isRunning = true;
			onAutoStart();
		}

		function pauseToast() {
			isRunning = false;
			onAutoStop();
		}

		function bindFocusEvents() {
			if (!document.hasFocus()) {
				pauseToast();
			}
			window.addEventListener("focus", playToast);
			window.addEventListener("blur", pauseToast);
		}

		function unbindFocusEvents() {
			window.removeEventListener("focus", playToast);
			window.removeEventListener("blur", pauseToast);
		}

		function bindDragEvents() {
			drag.didMove = false;
			document.addEventListener("mousemove", onDragMove);
			document.addEventListener("mouseup", onDragEnd);
			document.addEventListener("touchmove", onDragMove);
			document.addEventListener("touchend", onDragEnd);
		}

		function unbindDragEvents() {
			document.removeEventListener("mousemove", onDragMove);
			document.removeEventListener("mouseup", onDragEnd);
			document.removeEventListener("touchmove", onDragMove);
			document.removeEventListener("touchend", onDragEnd);
		}

		function onDragMove(e: MouseEvent | TouchEvent) {
			const elm = ref.current;
			if (elm && drag.canDrag) {
				drag.didMove = true;
				if (isRunning) {
					pauseToast();
				}

				drag.x = getX(e as DragEvent);
				drag.delta = drag.x - drag.start;

				elm.style.transform = `translateX(${drag.delta}px)`;
				elm.style.opacity = `${1 - Math.abs(drag.delta / drag.removalDistance)}`;
			}
		}

		function onDragEnd() {
			unbindDragEvents();
			setIsDrag(false);

			const elm = ref.current;
			if (elm && drag.canDrag && drag.didMove) {
				drag.canDrag = false;
				if (Math.abs(drag.delta) > drag.removalDistance) {
					return onExit();
				}
				elm.style.transform = "";
				elm.style.opacity = "";
			}
		}

		return {
			get eventHandlers() {
				const eventHandlers: DOMAttributes<HTMLElement> = {
					onMouseDown: onDragStart,
					onTouchStart: onDragStart,
					onMouseUp: onDragTransitionEnd,
					onTouchEnd: onDragTransitionEnd,
				};

				const { autoClose, pauseOnHover } = toast;
				if (autoClose && pauseOnHover) {
					eventHandlers.onMouseEnter = pauseToast;
					eventHandlers.onMouseLeave = playToast;
				}

				return eventHandlers;
			},
			onMount() {
				isRunning = true;
				return () => {
					onAutoStop();
					if (drag.canDrag) {
						unbindDragEvents();
					}
					if (isFocusLoss) {
						unbindFocusEvents();
					}
				};
			},
			onUpdate(ctx: Toast.Context) {
				toast = ctx.toast;
				onClose = ctx.onClose;
				onExit = ctx.onExit;

				const { autoClose, pauseOnFocusLoss } = toast;

				if (isFocusLoss != pauseOnFocusLoss) {
					isFocusLoss = pauseOnFocusLoss;
					if (pauseOnFocusLoss) {
						bindFocusEvents();
					} else {
						unbindFocusEvents();
					}
				}

				if (autoClose) {
					onAutoStart();
				} else {
					onAutoStop();
				}
			},
		};
	}, [id]);

	React.useEffect(memo.onMount, [memo]);
	React.useEffect(() => {
		memo.onUpdate(ctx);
	});

	const { eventHandlers } = memo;
	return {
		ref,
		toast,
		onClose,
		isDrag,
		eventHandlers,
	};
}

export function Paper() {
	const { ToastPaper, ToastIcon, ToastText, ToastActionButton, ToastButtonGroup, ToastCloseButton } =
		useToastManager();
	const { ref, toast, eventHandlers, isDrag, onClose } = usePaper();
	const { closable, open, level, icon, text, action } = toast;

	return (
		<ToastPaper ref={ref} isDrag={isDrag} isOpen={open} level={level} role="alertdialog" {...eventHandlers}>
			{icon !== false && <ToastIcon icon={icon} />}
			<ToastText>{text}</ToastText>
			{action.length > 0 && (
				<ToastButtonGroup>
					{action.map(({ id, name, ...rest }) => (
						<ToastActionButton key={id} {...rest}>
							{name}
						</ToastActionButton>
					))}
				</ToastButtonGroup>
			)}
			{closable && <ToastCloseButton tabIndex="0" role="button" onClick={onClose} />}
		</ToastPaper>
	);
}
