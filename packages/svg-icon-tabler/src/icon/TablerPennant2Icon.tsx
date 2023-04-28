import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPennant2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPennant2Icon = React.forwardRef<SVGSVGElement, TablerPennant2IconProps>(function TablerPennant2Icon(
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
			<path d="M16 21h-4" />
			<path d="M14 21v-18" />
			<path d="M14 4l-9 4l9 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPennant2Icon.displayName = "TablerPennant2Icon";
}
