import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUnlink2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUnlink2Icon = React.forwardRef<SVGSVGElement, TablerUnlink2IconProps>(function TablerUnlink2Icon(
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
			<path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerUnlink2Icon.displayName = "TablerUnlink2Icon";
}
