import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerColorPickerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerColorPickerIcon = React.forwardRef<SVGSVGElement, TablerColorPickerIconProps>(
	function TablerColorPickerIcon(props, ref) {
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
				<path d="M11 7l6 6" />
				<path d="M4 16l11.7 -11.7a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4l-11.7 11.7h-4v-4z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerColorPickerIcon.displayName = "TablerColorPickerIcon";
}
