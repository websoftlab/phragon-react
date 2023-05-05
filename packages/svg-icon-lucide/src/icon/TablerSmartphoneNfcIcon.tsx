import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSmartphoneNfcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSmartphoneNfcIcon = React.forwardRef<SVGSVGElement, TablerSmartphoneNfcIconProps>(
	function TablerSmartphoneNfcIcon(props, ref) {
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
				<path d="M3 6 H8 A1 1 0 0 1 9 7 V17 A1 1 0 0 1 8 18 H3 A1 1 0 0 1 2 17 V7 A1 1 0 0 1 3 6 z" />
				<path d="M13 8.32a7.43 7.43 0 0 1 0 7.36" />
				<path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58" />
				<path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSmartphoneNfcIcon.displayName = "TablerSmartphoneNfcIcon";
}
