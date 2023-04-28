import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRepeatOnceIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRepeatOnceIcon = React.forwardRef<SVGSVGElement, TablerRepeatOnceIconProps>(
	function TablerRepeatOnceIcon(props, ref) {
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
				<path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3" />
				<path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3" />
				<path d="M11 11l1 -1v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRepeatOnceIcon.displayName = "TablerRepeatOnceIcon";
}
