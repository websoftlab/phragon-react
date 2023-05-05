import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBedDoubleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBedDoubleIcon = React.forwardRef<SVGSVGElement, TablerBedDoubleIconProps>(
	function TablerBedDoubleIcon(props, ref) {
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
				<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
				<path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
				<path d="M12 4v6" />
				<path d="M2 18h20" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBedDoubleIcon.displayName = "TablerBedDoubleIcon";
}
