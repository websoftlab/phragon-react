import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPodiumIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPodiumIcon = React.forwardRef<SVGSVGElement, TablerPodiumIconProps>(function TablerPodiumIcon(
	props,
	ref
) {
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
			<path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485z" />
			<path d="M7 8v-2a3 3 0 0 1 3 -3" />
			<path d="M8 12l1 9" />
			<path d="M16 12l-1 9" />
			<path d="M7 21h10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPodiumIcon.displayName = "TablerPodiumIcon";
}
