import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPerfumeIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPerfumeIcon = React.forwardRef<SVGSVGElement, TablerPerfumeIconProps>(function TablerPerfumeIcon(
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
			<path d="M10 6v3" />
			<path d="M14 6v3" />
			<path d="M5 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
			<path d="M12 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M9 3h6v3h-6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPerfumeIcon.displayName = "TablerPerfumeIcon";
}
