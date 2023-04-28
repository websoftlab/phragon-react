import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClockRecordIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClockRecordIcon = React.forwardRef<SVGSVGElement, TablerClockRecordIconProps>(
	function TablerClockRecordIcon(props, ref) {
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
				<path d="M21 12.3a9 9 0 1 0 -8.683 8.694" />
				<path d="M12 7v5l2 2" />
				<path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClockRecordIcon.displayName = "TablerClockRecordIcon";
}
