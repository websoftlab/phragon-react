import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMiniprogramIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMiniprogramIcon = React.forwardRef<SVGSVGElement, TablerBrandMiniprogramIconProps>(
	function TablerBrandMiniprogramIcon(props, ref) {
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
				<path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
				<path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMiniprogramIcon.displayName = "TablerBrandMiniprogramIcon";
}
