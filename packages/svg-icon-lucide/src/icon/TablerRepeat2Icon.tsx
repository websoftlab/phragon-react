import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRepeat2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRepeat2Icon = React.forwardRef<SVGSVGElement, TablerRepeat2IconProps>(function TablerRepeat2Icon(
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
			<path d="m2 9 3-3 3 3" />
			<path d="M13 18H7a2 2 0 0 1-2-2V6" />
			<path d="m22 15-3 3-3-3" />
			<path d="M11 6h6a2 2 0 0 1 2 2v10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRepeat2Icon.displayName = "TablerRepeat2Icon";
}
