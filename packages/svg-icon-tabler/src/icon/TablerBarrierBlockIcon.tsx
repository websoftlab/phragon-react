import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarrierBlockIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarrierBlockIcon = React.forwardRef<SVGSVGElement, TablerBarrierBlockIconProps>(
	function TablerBarrierBlockIcon(props, ref) {
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
				<path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
				<path d="M7 16v4" />
				<path d="M7.5 16l9 -9" />
				<path d="M13.5 16l6.5 -6.5" />
				<path d="M4 13.5l6.5 -6.5" />
				<path d="M17 16v4" />
				<path d="M5 20h4" />
				<path d="M15 20h4" />
				<path d="M17 7v-2" />
				<path d="M7 7v-2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarrierBlockIcon.displayName = "TablerBarrierBlockIcon";
}
