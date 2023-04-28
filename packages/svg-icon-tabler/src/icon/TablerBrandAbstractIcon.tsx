import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandAbstractIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandAbstractIcon = React.forwardRef<SVGSVGElement, TablerBrandAbstractIconProps>(
	function TablerBrandAbstractIcon(props, ref) {
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
				<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
				<path d="M10.5 13.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
				<path d="M8 8h8v8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandAbstractIcon.displayName = "TablerBrandAbstractIcon";
}
