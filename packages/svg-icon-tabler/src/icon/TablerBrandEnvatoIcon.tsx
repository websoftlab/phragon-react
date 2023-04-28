import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandEnvatoIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandEnvatoIcon = React.forwardRef<SVGSVGElement, TablerBrandEnvatoIconProps>(
	function TablerBrandEnvatoIcon(props, ref) {
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
				<path d="M4.711 17.875c-.534 -1.339 -1.35 -4.178 .129 -6.47c1.415 -2.193 3.769 -3.608 5.099 -4.278l-5.229 10.748z" />
				<path d="M19.715 12.508c-.54 3.409 -2.094 6.156 -4.155 7.348c-4.069 2.353 -8.144 .45 -9.297 -.188c.877 -1.436 4.433 -7.22 6.882 -10.591c2.714 -3.737 5.864 -5.978 6.565 -6.077c0 .201 .03 .55 .071 1.03c.144 1.709 .443 5.264 -.066 8.478z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandEnvatoIcon.displayName = "TablerBrandEnvatoIcon";
}
