import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextDirectionRtlIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextDirectionRtlIcon = React.forwardRef<SVGSVGElement, TablerTextDirectionRtlIconProps>(
	function TablerTextDirectionRtlIcon(props, ref) {
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
				<path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
				<path d="M14 15v-11" />
				<path d="M10 15v-11" />
				<path d="M5 19h14" />
				<path d="M7 21l-2 -2l2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextDirectionRtlIcon.displayName = "TablerTextDirectionRtlIcon";
}
