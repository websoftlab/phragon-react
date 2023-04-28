import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHandRingFingerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHandRingFingerIcon = React.forwardRef<SVGSVGElement, TablerHandRingFingerIconProps>(
	function TablerHandRingFingerIcon(props, ref) {
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
				<path d="M8 13v-2.5a1.5 1.5 0 0 1 3 0v1.5" />
				<path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
				<path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
				<path d="M14 12v-6.5a1.5 1.5 0 0 1 3 0v6.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHandRingFingerIcon.displayName = "TablerHandRingFingerIcon";
}
