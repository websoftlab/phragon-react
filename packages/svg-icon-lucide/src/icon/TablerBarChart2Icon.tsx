import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarChart2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarChart2Icon = React.forwardRef<SVGSVGElement, TablerBarChart2IconProps>(
	function TablerBarChart2Icon(props, ref) {
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
				<path d="M18 20 L18 10" />
				<path d="M12 20 L12 4" />
				<path d="M6 20 L6 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarChart2Icon.displayName = "TablerBarChart2Icon";
}
