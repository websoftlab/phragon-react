import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandMyOppoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandMyOppoIcon = React.forwardRef<SVGSVGElement, TablerBrandMyOppoIconProps>(
	function TablerBrandMyOppoIcon(props, ref) {
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
				<path d="M18.316 5h-12.632l-3.418 4.019a1.089 1.089 0 0 0 .019 1.447l9.714 10.534l9.715 -10.49a1.09 1.09 0 0 0 .024 -1.444l-3.422 -4.066z" />
				<path d="M9 11l3 3l3 -3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandMyOppoIcon.displayName = "TablerBrandMyOppoIcon";
}
