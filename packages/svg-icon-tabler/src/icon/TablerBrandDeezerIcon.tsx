import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDeezerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDeezerIcon = React.forwardRef<SVGSVGElement, TablerBrandDeezerIconProps>(
	function TablerBrandDeezerIcon(props, ref) {
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
				<path d="M3 16.5h2v.5h-2z" />
				<path d="M8 16.5h2.5v.5h-2.5z" />
				<path d="M16 17h-2.5v-.5h2.5z" />
				<path d="M21.5 17h-2.5v-.5h2.5z" />
				<path d="M21.5 13h-2.5v.5h2.5z" />
				<path d="M21.5 9.5h-2.5v.5h2.5z" />
				<path d="M21.5 6h-2.5v.5h2.5z" />
				<path d="M16 13h-2.5v.5h2.5z" />
				<path d="M8 13.5h2.5v-.5h-2.5z" />
				<path d="M8 9.5h2.5v.5h-2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDeezerIcon.displayName = "TablerBrandDeezerIcon";
}
