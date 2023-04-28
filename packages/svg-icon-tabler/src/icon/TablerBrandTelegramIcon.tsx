import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandTelegramIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandTelegramIcon = React.forwardRef<SVGSVGElement, TablerBrandTelegramIconProps>(
	function TablerBrandTelegramIcon(props, ref) {
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
				<path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandTelegramIcon.displayName = "TablerBrandTelegramIcon";
}
