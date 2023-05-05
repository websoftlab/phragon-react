import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIterationCwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIterationCwIcon = React.forwardRef<SVGSVGElement, TablerIterationCwIconProps>(
	function TablerIterationCwIcon(props, ref) {
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
				<path d="M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" />
				<path d="M8 22 L4 18 L8 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIterationCwIcon.displayName = "TablerIterationCwIcon";
}
