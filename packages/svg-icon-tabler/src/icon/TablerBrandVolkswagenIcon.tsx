import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandVolkswagenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandVolkswagenIcon = React.forwardRef<SVGSVGElement, TablerBrandVolkswagenIconProps>(
	function TablerBrandVolkswagenIcon(props, ref) {
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
				<path d="M5 7l4.5 11l1.5 -5h2l1.5 5l4.5 -11" />
				<path d="M9 4l2 6h2l2 -6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandVolkswagenIcon.displayName = "TablerBrandVolkswagenIcon";
}
