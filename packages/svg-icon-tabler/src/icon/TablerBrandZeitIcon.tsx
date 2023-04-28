import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandZeitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandZeitIcon = React.forwardRef<SVGSVGElement, TablerBrandZeitIconProps>(
	function TablerBrandZeitIcon(props, ref) {
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
				<path d="M3 20h18l-9 -16z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandZeitIcon.displayName = "TablerBrandZeitIcon";
}
