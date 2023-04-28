import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDeviceMobileSearchIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDeviceMobileSearchIcon = React.forwardRef<SVGSVGElement, TablerDeviceMobileSearchIconProps>(
	function TablerDeviceMobileSearchIcon(props, ref) {
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
				<path d="M12 21h-4a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v6" />
				<path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M20.2 20.2l1.8 1.8" />
				<path d="M11 4h2" />
				<path d="M12 17v.01" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDeviceMobileSearchIcon.displayName = "TablerDeviceMobileSearchIcon";
}
