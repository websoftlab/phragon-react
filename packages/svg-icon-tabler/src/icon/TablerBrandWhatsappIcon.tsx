import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandWhatsappIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandWhatsappIcon = React.forwardRef<SVGSVGElement, TablerBrandWhatsappIconProps>(
	function TablerBrandWhatsappIcon(props, ref) {
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
				<path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
				<path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandWhatsappIcon.displayName = "TablerBrandWhatsappIcon";
}
