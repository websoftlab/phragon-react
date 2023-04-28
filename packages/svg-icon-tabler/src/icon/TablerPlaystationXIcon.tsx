import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlaystationXIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlaystationXIcon = React.forwardRef<SVGSVGElement, TablerPlaystationXIconProps>(
	function TablerPlaystationXIcon(props, ref) {
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
				<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
				<path d="M8.5 8.5l7 7" />
				<path d="M8.5 15.5l7 -7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPlaystationXIcon.displayName = "TablerPlaystationXIcon";
}
