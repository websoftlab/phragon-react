import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandOkRuIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandOkRuIcon = React.forwardRef<SVGSVGElement, TablerBrandOkRuIconProps>(
	function TablerBrandOkRuIcon(props, ref) {
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
				<path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M20 12c0 8 0 8 -8 8s-8 0 -8 -8s0 -8 8 -8s8 0 8 8z" />
				<path d="M9.5 13c1.333 .667 3.667 .667 5 0" />
				<path d="M9.5 17l2.5 -3l2.5 3" />
				<path d="M12 13.5v.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandOkRuIcon.displayName = "TablerBrandOkRuIcon";
}
