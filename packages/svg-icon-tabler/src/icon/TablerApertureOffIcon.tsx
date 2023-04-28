import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerApertureOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerApertureOffIcon = React.forwardRef<SVGSVGElement, TablerApertureOffIconProps>(
	function TablerApertureOffIcon(props, ref) {
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
				<path d="M3.6 15h10.55" />
				<path d="M5.641 5.631a9 9 0 1 0 12.719 12.738m1.68 -2.318a9 9 0 0 0 -12.074 -12.098" />
				<path d="M7.395 7.534l2.416 7.438" />
				<path d="M17.032 4.636l-4.852 3.526m-2.334 1.695l-1.349 .98" />
				<path d="M20.559 14.51l-8.535 -6.201" />
				<path d="M12.257 20.916l2.123 -6.533m.984 -3.028l.154 -.473" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerApertureOffIcon.displayName = "TablerApertureOffIcon";
}
