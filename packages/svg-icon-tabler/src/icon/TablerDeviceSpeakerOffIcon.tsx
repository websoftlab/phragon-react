import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceSpeakerOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceSpeakerOffIcon = React.forwardRef<SVGSVGElement, TablerDeviceSpeakerOffIconProps>(
	function TablerDeviceSpeakerOffIcon(props, ref) {
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
				<path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14" />
				<path d="M11.114 11.133a3 3 0 1 0 3.754 3.751" />
				<path d="M12 7v.01" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceSpeakerOffIcon.displayName = "TablerDeviceSpeakerOffIcon";
}
