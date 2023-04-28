import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceLandlinePhoneIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceLandlinePhoneIcon = React.forwardRef<SVGSVGElement, TablerDeviceLandlinePhoneIconProps>(
	function TablerDeviceLandlinePhoneIcon(props, ref) {
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
				<path d="M20 3h-2a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-14a2 2 0 0 0 -2 -2z" />
				<path d="M16 4h-11a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h11" />
				<path d="M12 8h-6v3h6z" />
				<path d="M12 14v.01" />
				<path d="M9 14v.01" />
				<path d="M6 14v.01" />
				<path d="M12 17v.01" />
				<path d="M9 17v.01" />
				<path d="M6 17v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceLandlinePhoneIcon.displayName = "TablerDeviceLandlinePhoneIcon";
}
