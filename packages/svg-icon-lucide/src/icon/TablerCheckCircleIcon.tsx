import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCheckCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCheckCircleIcon = React.forwardRef<SVGSVGElement, TablerCheckCircleIconProps>(
	function TablerCheckCircleIcon(props, ref) {
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
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
				<path d="M22 4 L12 14.01 L9 11.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCheckCircleIcon.displayName = "TablerCheckCircleIcon";
}
