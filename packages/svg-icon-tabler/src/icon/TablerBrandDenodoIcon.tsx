import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDenodoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDenodoIcon = React.forwardRef<SVGSVGElement, TablerBrandDenodoIconProps>(
	function TablerBrandDenodoIcon(props, ref) {
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
				<path d="M11 11h2v2h-2z" />
				<path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" />
				<path d="M11 19h2v2h-2z" />
				<path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" />
				<path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" />
				<path d="M11 3h2v2h-2z" />
				<path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDenodoIcon.displayName = "TablerBrandDenodoIcon";
}
