import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrightnessHalfIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrightnessHalfIcon = React.forwardRef<SVGSVGElement, TablerBrightnessHalfIconProps>(
	function TablerBrightnessHalfIcon(props, ref) {
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
				<path d="M12 9a3 3 0 0 0 0 6v-6z" />
				<path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrightnessHalfIcon.displayName = "TablerBrightnessHalfIcon";
}
