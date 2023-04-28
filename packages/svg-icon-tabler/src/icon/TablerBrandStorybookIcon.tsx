import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandStorybookIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandStorybookIcon = React.forwardRef<SVGSVGElement, TablerBrandStorybookIconProps>(
	function TablerBrandStorybookIcon(props, ref) {
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
				<path d="M5 4l.5 16.5l13.5 .5v-18z" />
				<path d="M9 15c.6 1.5 1.639 2 3.283 2h-.283c1.8 0 3 -.974 3 -2.435c0 -1.194 -.831 -1.799 -2.147 -2.333l-1.975 -.802c-1.15 -.467 -1.878 -1.422 -1.878 -2.467c0 -.97 .899 -1.786 2.087 -1.893l.613 -.055c1.528 -.138 3 .762 3.3 1.985" />
				<path d="M16 3.5v1" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandStorybookIcon.displayName = "TablerBrandStorybookIcon";
}
