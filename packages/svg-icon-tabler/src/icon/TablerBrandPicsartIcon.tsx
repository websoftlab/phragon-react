import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPicsartIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPicsartIcon = React.forwardRef<SVGSVGElement, TablerBrandPicsartIconProps>(
	function TablerBrandPicsartIcon(props, ref) {
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
				<path d="M12 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M12 9m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
				<path d="M5 9v11a2 2 0 1 0 4 0v-4.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandPicsartIcon.displayName = "TablerBrandPicsartIcon";
}
