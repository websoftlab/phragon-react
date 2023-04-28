import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPodiumOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPodiumOffIcon = React.forwardRef<SVGSVGElement, TablerPodiumOffIconProps>(
	function TablerPodiumOffIcon(props, ref) {
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
				<path d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" />
				<path d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" />
				<path d="M8 12l1 9" />
				<path d="M15.599 15.613l-.599 5.387" />
				<path d="M7 21h10" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPodiumOffIcon.displayName = "TablerPodiumOffIcon";
}
