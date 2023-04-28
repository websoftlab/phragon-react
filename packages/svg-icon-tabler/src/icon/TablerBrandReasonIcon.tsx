import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandReasonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandReasonIcon = React.forwardRef<SVGSVGElement, TablerBrandReasonIconProps>(
	function TablerBrandReasonIcon(props, ref) {
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
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				<path d="M18 18h-3v-6h3" />
				<path d="M18 15h-3" />
				<path d="M8 18v-6h2.5a1.5 1.5 0 0 1 0 3h-2.5" />
				<path d="M12 18l-2 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandReasonIcon.displayName = "TablerBrandReasonIcon";
}
