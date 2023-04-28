import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextColorIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextColorIcon = React.forwardRef<SVGSVGElement, TablerTextColorIconProps>(
	function TablerTextColorIcon(props, ref) {
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
				<path d="M9 15v-7a3 3 0 0 1 6 0v7" />
				<path d="M9 11h6" />
				<path d="M5 19h14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTextColorIcon.displayName = "TablerTextColorIcon";
}
