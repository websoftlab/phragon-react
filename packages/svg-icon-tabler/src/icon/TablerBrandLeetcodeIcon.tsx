import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandLeetcodeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandLeetcodeIcon = React.forwardRef<SVGSVGElement, TablerBrandLeetcodeIconProps>(
	function TablerBrandLeetcodeIcon(props, ref) {
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
				<path d="M12 13h7.5" />
				<path d="M9.424 7.268l4.999 -4.999" />
				<path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandLeetcodeIcon.displayName = "TablerBrandLeetcodeIcon";
}
