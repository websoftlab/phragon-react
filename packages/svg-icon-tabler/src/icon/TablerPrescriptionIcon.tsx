import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPrescriptionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPrescriptionIcon = React.forwardRef<SVGSVGElement, TablerPrescriptionIconProps>(
	function TablerPrescriptionIcon(props, ref) {
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
				<path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
				<path d="M19 21l-9 -9" />
				<path d="M13 21l6 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPrescriptionIcon.displayName = "TablerPrescriptionIcon";
}
