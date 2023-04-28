import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerListCheckIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerListCheckIcon = React.forwardRef<SVGSVGElement, TablerListCheckIconProps>(
	function TablerListCheckIcon(props, ref) {
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
				<path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
				<path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
				<path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
				<path d="M11 6l9 0" />
				<path d="M11 12l9 0" />
				<path d="M11 18l9 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerListCheckIcon.displayName = "TablerListCheckIcon";
}
