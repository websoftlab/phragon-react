import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBarcodeOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBarcodeOffIcon = React.forwardRef<SVGSVGElement, TablerBarcodeOffIconProps>(
	function TablerBarcodeOffIcon(props, ref) {
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
				<path d="M4 7v-1c0 -.552 .224 -1.052 .586 -1.414" />
				<path d="M4 17v1a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v1" />
				<path d="M16 20h2c.551 0 1.05 -.223 1.412 -.584" />
				<path d="M5 11h1v2h-1z" />
				<path d="M10 11v2" />
				<path d="M15 11v.01" />
				<path d="M19 11v2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBarcodeOffIcon.displayName = "TablerBarcodeOffIcon";
}
