import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVisaIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVisaIcon = React.forwardRef<SVGSVGElement, TablerBrandVisaIconProps>(
	function TablerBrandVisaIcon(props, ref) {
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
				<path d="M21 15l-1 -6l-2.5 6" />
				<path d="M9 15l1 -6" />
				<path d="M3 9h1v6h.5l2.5 -6" />
				<path d="M16 9.5a.5 .5 0 0 0 -.5 -.5h-.75c-.721 0 -1.337 .521 -1.455 1.233l-.09 .534a1.059 1.059 0 0 0 1.045 1.233a1.059 1.059 0 0 1 1.045 1.233l-.09 .534a1.476 1.476 0 0 1 -1.455 1.233h-.75a.5 .5 0 0 1 -.5 -.5" />
				<path d="M18 14h2.7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVisaIcon.displayName = "TablerBrandVisaIcon";
}
