import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHexagonsOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHexagonsOffIcon = React.forwardRef<SVGSVGElement, TablerHexagonsOffIconProps>(
	function TablerHexagonsOffIcon(props, ref) {
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
				<path d="M4 18v-5l4 -2l4 2v5l-4 2z" />
				<path d="M8 11v-3m1.332 -2.666l2.668 -1.334l4 2v5" />
				<path d="M12 13l.661 -.331" />
				<path d="M15.345 11.328l.655 -.328l4 2v3m-1.334 2.667l-2.666 1.333l-4 -2" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHexagonsOffIcon.displayName = "TablerHexagonsOffIcon";
}
