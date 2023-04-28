import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBorderStyle2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBorderStyle2Icon = React.forwardRef<SVGSVGElement, TablerBorderStyle2IconProps>(
	function TablerBorderStyle2Icon(props, ref) {
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
				<path d="M4 18v.01" />
				<path d="M8 18v.01" />
				<path d="M12 18v.01" />
				<path d="M16 18v.01" />
				<path d="M20 18v.01" />
				<path d="M18 12h2" />
				<path d="M11 12h2" />
				<path d="M4 12h2" />
				<path d="M4 6h16" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBorderStyle2Icon.displayName = "TablerBorderStyle2Icon";
}
