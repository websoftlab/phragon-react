import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandSharikIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandSharikIcon = React.forwardRef<SVGSVGElement, TablerBrandSharikIconProps>(
	function TablerBrandSharikIcon(props, ref) {
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
				<path d="M4.281 16.606a8.968 8.968 0 0 1 1.363 -10.977a9.033 9.033 0 0 1 11.011 -1.346c-1.584 4.692 -2.415 6.96 -4.655 8.717c-1.584 1.242 -3.836 2.24 -7.719 3.606zm16.335 -7.306c2.113 7.59 -4.892 13.361 -11.302 11.264c1.931 -3.1 3.235 -4.606 4.686 -6.065c1.705 -1.715 3.591 -3.23 6.616 -5.199z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandSharikIcon.displayName = "TablerBrandSharikIcon";
}
