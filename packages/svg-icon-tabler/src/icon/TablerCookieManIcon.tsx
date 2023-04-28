import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCookieManIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCookieManIcon = React.forwardRef<SVGSVGElement, TablerCookieManIconProps>(
	function TablerCookieManIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M12 2a5 5 0 0 1 2.845 9.112l.147 .369l1.755 -.803c.969 -.443 2.12 -.032 2.571 .918a1.88 1.88 0 0 1 -.787 2.447l-.148 .076l-2.383 1.089v2.02l1.426 1.425l.114 .125a1.96 1.96 0 0 1 -2.762 2.762l-.125 -.114l-2.079 -2.08l-.114 -.124a1.957 1.957 0 0 1 -.161 -.22h-.599c-.047 .075 -.101 .15 -.16 .22l-.115 .125l-2.08 2.079a1.96 1.96 0 0 1 -2.886 -2.648l.114 -.125l1.427 -1.426v-2.019l-2.383 -1.09l-.148 -.075a1.88 1.88 0 0 1 -.787 -2.447c.429 -.902 1.489 -1.318 2.424 -.978l.147 .06l1.755 .803l.147 -.369a5 5 0 0 1 -2.15 -3.895l0 -.217a5 5 0 0 1 5 -5z" />
				<path d="M12 16h.01" />
				<path d="M12 13h.01" />
				<path d="M10 7h.01" />
				<path d="M14 7h.01" />
				<path d="M12 9h.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCookieManIcon.displayName = "TablerCookieManIcon";
}
