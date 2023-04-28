import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSolarPanel2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSolarPanel2Icon = React.forwardRef<SVGSVGElement, TablerSolarPanel2IconProps>(
	function TablerSolarPanel2Icon(props, ref) {
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
				<path d="M8 2a4 4 0 1 0 8 0" />
				<path d="M4 3h1" />
				<path d="M19 3h1" />
				<path d="M12 9v1" />
				<path d="M17.2 7.2l.707 .707" />
				<path d="M6.8 7.2l-.7 .7" />
				<path d="M4.28 21h15.44a1 1 0 0 0 .97 -1.243l-1.5 -6a1 1 0 0 0 -.97 -.757h-12.44a1 1 0 0 0 -.97 .757l-1.5 6a1 1 0 0 0 .97 1.243z" />
				<path d="M4 17h16" />
				<path d="M10 13l-1 8" />
				<path d="M14 13l1 8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSolarPanel2Icon.displayName = "TablerSolarPanel2Icon";
}
