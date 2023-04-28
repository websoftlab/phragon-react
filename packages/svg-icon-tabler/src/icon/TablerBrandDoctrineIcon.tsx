import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandDoctrineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandDoctrineIcon = React.forwardRef<SVGSVGElement, TablerBrandDoctrineIconProps>(
	function TablerBrandDoctrineIcon(props, ref) {
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
				<path d="M12 14m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
				<path d="M9 14h6" />
				<path d="M12 11l3 3l-3 3" />
				<path d="M10 3l6.9 6" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandDoctrineIcon.displayName = "TablerBrandDoctrineIcon";
}
