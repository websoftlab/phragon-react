import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSchool2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSchool2Icon = React.forwardRef<SVGSVGElement, TablerSchool2IconProps>(function TablerSchool2Icon(
	props,
	ref
) {
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
			<path d="M13 10 A1 1 0 0 1 12 11 A1 1 0 0 1 11 10 A1 1 0 0 1 13 10" />
			<path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
			<path d="M6 17v.01" />
			<path d="M6 13v.01" />
			<path d="M18 17v.01" />
			<path d="M18 13v.01" />
			<path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSchool2Icon.displayName = "TablerSchool2Icon";
}
