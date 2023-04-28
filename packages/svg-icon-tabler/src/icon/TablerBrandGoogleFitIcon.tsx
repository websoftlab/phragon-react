import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandGoogleFitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandGoogleFitIcon = React.forwardRef<SVGSVGElement, TablerBrandGoogleFitIconProps>(
	function TablerBrandGoogleFitIcon(props, ref) {
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
				<path d="M12 9.314l-2.343 -2.344a3.314 3.314 0 0 0 -4.686 4.686l2.343 2.344l4.686 4.686l7.03 -7.03a3.314 3.314 0 0 0 -4.687 -4.685l-7.03 7.029" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandGoogleFitIcon.displayName = "TablerBrandGoogleFitIcon";
}
