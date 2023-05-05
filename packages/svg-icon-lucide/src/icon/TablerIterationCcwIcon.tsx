import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerIterationCcwIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerIterationCcwIcon = React.forwardRef<SVGSVGElement, TablerIterationCcwIconProps>(
	function TablerIterationCcwIcon(props, ref) {
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
				<path d="M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" />
				<path d="M16 14 L20 18 L16 22" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerIterationCcwIcon.displayName = "TablerIterationCcwIcon";
}
