import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceSdCardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceSdCardIcon = React.forwardRef<SVGSVGElement, TablerDeviceSdCardIconProps>(
	function TablerDeviceSdCardIcon(props, ref) {
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
				<path d="M7 21h10a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2h-6.172a2 2 0 0 0 -1.414 .586l-3.828 3.828a2 2 0 0 0 -.586 1.414v10.172a2 2 0 0 0 2 2z" />
				<path d="M13 6v2" />
				<path d="M16 6v2" />
				<path d="M10 7v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceSdCardIcon.displayName = "TablerDeviceSdCardIcon";
}
