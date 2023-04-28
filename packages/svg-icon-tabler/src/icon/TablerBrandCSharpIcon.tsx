import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandCSharpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandCSharpIcon = React.forwardRef<SVGSVGElement, TablerBrandCSharpIconProps>(
	function TablerBrandCSharpIcon(props, ref) {
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
				<path d="M10 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3" />
				<path d="M16 7l-1 10" />
				<path d="M20 7l-1 10" />
				<path d="M14 10h7.5" />
				<path d="M21 14h-7.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandCSharpIcon.displayName = "TablerBrandCSharpIcon";
}
